<template>
    <div class="app-container">
        <el-form ref="temp" :model="temp" :rules="registerRules" label-position="left" label-width="150px" style="width: 400px; margin-left:50px;">
            <el-form-item label="User Name" prop="username">
                <el-input tabindex="1" ref="username" v-model="temp.username" name="username" type="text" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input ref="password"
                          v-model="temp.password"
                          name="password"
                          type="password"
                          tabindex="2"
                />
            </el-form-item>
            <el-form-item label="Display Name">
                <el-input tabindex="3" v-model="temp.displayname" name="displayname" type="text" />
            </el-form-item>
            <el-form-item label="Email">
                <el-input tabindex="4" v-model="temp.email" name="email" type="email" placeholder="example@email.com" />
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="rollback()">
                キャンセル
            </el-button>
            <el-button type="primary" @click="createData()">
                保存
            </el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "addUser",
        data() {
            let validatePassword = (rule, value, callback) => {
                if (value.length < 6) {
                    return callback(new Error('The password can not be less than 6 digits'))
                }
                setTimeout(() => {
                    if (this.temp.password !== '') {
                        this.$refs.temp.validateField('password');
                    }
                    callback();
                }, 1000);
            };
            let validateUserName = (rule, value, callback) => {
                let usernameRegex = /^[a-zA-Z0-9]+$/;
                let validfirstUsername = this.temp.username.match(usernameRegex);
                if(validfirstUsername == null){
                    return callback(new Error('A-Z, a-z, number and \'-\' are  acceptable.'))
                }
                setTimeout(() => {
                    if (this.temp.username !== '') {
                        this.$refs.temp.validateField('username');
                    }
                    callback();
                }, 1000);
            };
            return {
                temp: {
                    username: '',
                    displayname: '',
                    email: '',
                    password: ''
                },
                registerRules: {
                    username: [{ required: true, trigger: 'blur', validator: validateUserName }],
                    password: [{ required: true, trigger: 'blur', validator: validatePassword }]
                }
            }
        },
        mounted() {
            if (this.temp.username === '') {
                this.$refs.username.focus()
            }
        },
        methods: {
            createData() {
                this.$refs['temp'].validate(async (valid) => {
                    if (valid) {
                        let res = await this.$store.dispatch('user/addUser', this.temp)
                        if (res === 'register user successful') {
                            this.$notify({
                                title: 'Success',
                                message: 'Register user Successfully',
                                type: 'success',
                                duration: 3000
                            })
                            this.$router.replace('/manageruser/index')
                        } else {
                            this.$notify({
                                title: 'Error',
                                message: 'Register user error',
                                type: 'error',
                                duration: 3000
                            })
                        }
                    } else {
                        return false
                    }
                })
            },
            rollback() {
                this.$router.push('/manageruser/index')
            }
        }
    }
</script>

<style scoped>

</style>
