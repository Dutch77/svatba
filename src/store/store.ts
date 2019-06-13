import Vue from 'Vue'
import Vuex, {ActionContext} from 'Vuex'

Vue.use(Vuex);
import {LoginPayload, UserProfile} from "../interfaces";
import {isNull} from 'underscore'

export default new Vuex.Store({
    state: {
        userProfile: null as UserProfile | null
    },
    actions: {
        async login(context, payload: LoginPayload) {
            context.state.userProfile = await this.dispatch('getUserProfile', payload)
        },
        async getUserProfile(context, payload: LoginPayload): Promise<UserProfile> {
            return {
                firstName: 'test',
                lastName: 'testovič',
                foodType: 0,
                isPlusOne: false,
                plusOneId: null
            }
        }

    },
    getters: {
        loggedIn: (state, getters) => {
            return isNull(state.userProfile)
        }
    }
})