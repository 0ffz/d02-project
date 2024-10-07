import {makeProject} from '@motion-canvas/core';
import audio from '../audio/test.mp3';
import example from './scenes/example?scene';
import example2 from "./scenes/example2?scene";

export default makeProject({
  scenes: [example, example2],
});
