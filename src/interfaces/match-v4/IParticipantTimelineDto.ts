interface IParticipantTimelineDto {
    /**
     * Participant's calculated lane. MID and BOT are legacy values.
     * (Legal values: MID, MIDDLE, TOP, JUNGLE, BOT, BOTTOM)
     */
    lane: string;

    participantId: number;

    /** Creep score difference versus the calculated lane opponent(s) for a specified period. */
    csDiffPerMinDeltas: Map<string, number>;

    /** Gold for a specified period. */
    goldPerMinDeltas: Map<string, number>;

    /** Experience difference versus the calculated lane opponent(s) for a specified period. */
    xpDiffPerMinDeltas: Map<string, number>;

    /** Creeps for a specified period. */
    creepsPerMinDeltas: Map<string, number>;

    /** Experience change for a specified period. */
    xpPerMinDeltas: Map<string, number>;

    /** Participant's calculated role. (Legal values: DUO, NONE, SOLO, DUO_CARRY, DUO_SUPPORT) */
    role: string;

    /** Damage taken difference versus the calculated lane opponent(s) for a specified period. */
    damageTakenDiffPerMinDeltas: Map<string, number>;

    /** Damage taken for a specified period. */
    damageTakenPerMinDeltas: Map<string, number>;
}
