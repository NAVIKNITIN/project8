
import {combineReducers} from "redux";
import { selectedsongreducer, songreducer } from '../reducers';

const  reducers = combineReducers({songs: songreducer, selectsong : selectedsongreducer});
export default reducers;

