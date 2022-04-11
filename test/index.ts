import fs from 'node:fs';
import path from 'node:path';
import { useEffect, useState } from 'react';

export function App (): number {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex((prev) => prev + 1);
    }, [setIndex]);

    return index;
}

void (async () => {
    const result = await fs.promises.readFile(
        path.resolve(__dirname, './test.ts'),
    );

    console.log(result);
});
