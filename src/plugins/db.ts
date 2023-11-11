import { QueryParams, QueryResults } from '@src/share/domain.share'
import * as mysql from 'mysql2/promise'

export class SqlManager {
  private static databaseInstance: SqlManager | null
  private readonly mysqlPool: mysql.Pool

  private constructor() {
    this.mysqlPool = mysql.createPool({
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    })
  }

  public static get instance(): SqlManager {
    if (!SqlManager.databaseInstance) {
      SqlManager.databaseInstance = new SqlManager()
    }

    return SqlManager.databaseInstance
  }

  public async query<Type extends QueryResults>(
    sqlOrOptions: string,
    params: QueryParams = []
  ): Promise<Type> {
    const preparedQuery = mysql.format(sqlOrOptions, params)

    const [rows] = await this.mysqlPool.execute<Type>(preparedQuery)

    return rows
  }
}

export const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})
