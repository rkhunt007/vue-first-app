<template>
    <section>
        <base-card>
        <h3>Register as coach</h3>
         <coach-form @register-coach="saveData"></coach-form>
        </base-card>
    </section>
</template>

<script>
import { mapActions } from 'vuex'
import CoachForm from '../../components/coaches/CoachForm.vue'
export default {
    components: {
        CoachForm
    },
    computed: {
        
    },
    methods: {
        saveData(coachData) {
           this.$store.dispatch('coaches/registerCoach', coachData);
           this.$router.push('/');
        }
    }
}
</script>