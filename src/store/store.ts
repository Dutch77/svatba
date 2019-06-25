import Vue from 'Vue'
import Vuex from 'Vuex'
Vue.use(Vuex);
import {LoginPayload, UserProfile} from "../interfaces";
import {isEmpty} from 'underscore'
import {InvalidCodeError} from "../errors/InvalidCodeError";

export default new Vuex.Store({
    state: {
        userProfile: {} as UserProfile,
        incrementMe: 0 as number
    },
    mutations: {
        saveUserProfile(state, userProfile: UserProfile) {
            // state.userProfile = userProfile
            // Vue.set(state, 'userProfile', userProfile)
            state.userProfile = {...userProfile}
        }
    },
    actions: {
        async login({dispatch, commit}, payload: LoginPayload): Promise<UserProfile> {
            let userProfile = await dispatch('getUserProfile', payload)
            commit('saveUserProfile', userProfile)
            return userProfile
        },
        async getUserProfile(context, payload: LoginPayload): Promise<UserProfile> {
            if (payload.code === '666') {
                return {
                    firstName: 'test',
                    lastName: 'testovič',
                    foodType: 0,
                    isPlusOne: false,
                    plusOneId: null
                }
            }
            throw new InvalidCodeError(payload.code)
        }

    },
    getters: {
        isLoggedIn: (state) => {
            return !isEmpty(state.userProfile)
        }
    }
})