import {Circle, makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {all, createRef, Direction, slideTransition, waitFor} from '@motion-canvas/core';
import {Latex} from "@motion-canvas/2d";

export default makeScene2D(function* (view) {
    // Create your animations here

    const circle = createRef<Circle>();
    const circle2 = createRef<Circle>();
    const rect = createRef<Rect>();
    const text = createRef<Txt>();

    view.add(
        <Rect
            ref={rect}
            width={'100%'}
            height={'100%'}
            fill={'lightcoral'}
            layout
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Txt
                ref={text}
                fontSize={160}
                fontWeight={700}
                fill={'white'}
                fontFamily={'"JetBrains Mono", monospace'}
            >
                SECOND SCENE
            </Txt>
        </Rect>,
    );
    // view.add(<Circle ref={circle} size={320} fill={'lightseagreen'}/>);
    // view.add(<Circle ref={circle2} size={30} fill={'blue'}/>);

    yield* slideTransition(Direction.Left);

    yield* waitFor(0.4);
    yield* all(
        rect().fill('lightseagreen', 0.6),
        text().text('FIRST SCENE', 0.6),
        text().fill('FIRST SCENE', 0.6),
    );/*
    yield* slideTransition(Direction.Left);
    yield* all(
        circle().scale(2, 2).to(1, 2),
        circle2().scale(2, 2).to(1, 2),
    );*/
});
