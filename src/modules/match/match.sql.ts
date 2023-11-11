import { SqlManager } from '@src/plugins/db'

import { MatchDto, MatchPayload } from './match.domain'

const db = SqlManager.instance

export const getMatches = async (): Promise<MatchDto[]> => {
  return db.query<MatchDto[]>(
    `
            SELECT
                id_match AS matchId,
                team_one AS teamOne,
                team_two AS teamTwo,
                winner,
                one_score AS scoreOne,
                two_score AS scoreTwo,
                date_Event AS eventDateTime
            FROM
                mp_match
        `
  )
}
