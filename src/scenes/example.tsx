import {Latex, makeScene2D, Img} from '@motion-canvas/2d';
import {createRef, Direction, slideTransition, waitUntil} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    // Create your animations here

    // const circle = createRef<Circle>();
    // const circle2 = createRef<Circle>();

    // view.add(<Circle ref={circle} size={320} fill={'lightseagreen'}/>);
    // view.add(<Circle ref={circle2} size={30} fill={'blue'}/>);
    const tex = createRef<Latex>();
    view.add(<Latex ref={tex} tex="{{1}} + {{2}}" fill="white"/>);
    yield* tex().tex(['2', '+', '3', '-', '4'], 1);
    yield* waitUntil('event');
    // yield* all(
    //     circle().scale(2, 2).to(1, 2),
    //     circle2().scale(2, 2).to(1, 2),
    // );
});
