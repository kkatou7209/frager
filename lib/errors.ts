export class FragerError extends Error {

    public constructor(message: string, error: Error | null = null) {
        super(message, { cause: error });
    }
}

export class FragerUrlFormatError extends FragerError {}