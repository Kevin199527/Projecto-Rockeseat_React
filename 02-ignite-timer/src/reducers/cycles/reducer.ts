import {ActionTypes} from "./action.ts";
import { produce } from 'immer';

interface CycleState{
    cycles: Cycle[];
    activeCycleId: string | null;
}

export interface Cycle {
    id: string; // Identificador único para cada ciclo
    task: string; // Nome da tarefa
    minutesAmount: number; // Duração do ciclo em minutos
    startDate: Date; // Data e hora de início do ciclo
    interruptedDate?: Date; // Data e hora de interrompimento do ciclo
    finishedDate?: Date; // Data e hora de conclusão do ciclo
}

export function  cyclesReducer(state: CycleState, action: any) {

    switch (action.type) {
        case ActionTypes.ADD_NEW_CYCLE: {
            /*return {
                ...state,
                cycles: [...state.cycles, action.payload.newCycle],
                activeCycleId: action.payload.newCycle.id,
            }*/
            return produce(state, draft => {
                draft.cycles.push(action.payload.newCycle)
                draft.activeCycleId = action.payload.newCycle.id
            })
        }

        case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
            /*return {
                ...state,
                cycle: state.cycles.map((cycle) => {
                    if (cycle.id === state.activeCycleId) {
                        return {...cycle, interruptedDate: new Date()}
                    } else {
                        return cycle
                    }
                }),
                activeCycleId: null,
            }*/
            const currentCycleIndex = state.cycles.findIndex((cycle) => {
                return cycle.id === state.activeCycleId
            })

            if (currentCycleIndex < 0){
                return state;
            }

            return produce(state, (draft) => {
                draft.activeCycleId = null;
                draft.cycles[currentCycleIndex].interruptedDate = new Date();
            })
        }

        case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
           /* return {
                ...state,
                cycle: state.cycles.map((cycle) => {
                    if (cycle.id === state.activeCycleId) {
                        return {...cycle, finishedDate: new Date()}
                    } else {
                        return cycle
                    }
                }),
                activeCycleId: null,
            }*/
            const currentCycleIndex = state.cycles.findIndex((cycle) => {
                return cycle.id === state.activeCycleId
            })

            if (currentCycleIndex < 0){
                return state;
            }

            return produce(state, (draft) => {
                draft.activeCycleId = null;
                draft.cycles[currentCycleIndex].finishedDate = new Date();
            })
        }
    }

    return state
}