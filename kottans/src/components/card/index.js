import { h, Component } from 'preact';
import style from './style';

export default function Card(props) {
    return (
        <div>
            <h1>Preact card!!!</h1>
            <div>{props.name}</div>
            
            <div>{props.description}</div>
            <div>props.fork is repo a fork?</div>
            <div>props.stars stars count</div>
            <div>props.update}updated date</div>
            <div> props.language}language</div>
        </div>
    );
	
}