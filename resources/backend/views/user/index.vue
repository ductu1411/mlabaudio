<template>
    <div class="app-container">
        <div class="filter-container">
            <el-button class="filter-item" type="primary" icon="el-icon-edit" style="float: right"
                       @click="$router.push('/manageruser/adduser')">
                新規作成
            </el-button>
        </div>
        <el-table
            :data="users.data"
            border
            fit
            highlight-current-row
            style="width: 100%;"
            :key="keyRerender"
        >
            <el-table-column label="利用者名" prop="id">
                <template slot-scope="{row}">
                    <span>{{ row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Email">
                <template slot-scope="{row}">
                    <span>{{ row.email }}</span>
                </template>
            </el-table-column>
            <el-table-column label="作成日">
                <template slot-scope="{row}">
                    <span>{{ row.created_at }}</span>
                </template>
            </el-table-column>
            <el-table-column label="編集" class-name="small-padding fixed-width">
                <template slot-scope="{row,$index}">
                    <el-button type="primary" size="mini" @click="handleUpdate(row, $index)">
                        編集
                    </el-button>
                    <el-button size="mini" type="danger" v-if="currentUser.id != row.id" @click="handleDelete(row.id, $index)">
                        削除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <pagination v-show="total > 7" :total="total" :page.sync="page"
                    :pageSizes.sync="pageSizes"
                    :limit.sync="limit" @pagination="getList" />

        <el-dialog :visible.sync="dialogFormVisible">
            <el-form ref="dataForm" :model="temp" label-position="left" label-width="150px" style="width: 400px; margin-left:50px;">
                <el-form-item label="User Name">
                    <el-input v-model="temp.user_name" name="user_name" type="text" disabled />
                </el-form-item>
                <el-form-item label="Display Name">
                    <el-input v-model="temp.name" name="name" type="text" />
                </el-form-item>
                <el-form-item label="Email">
                    <el-input v-model="temp.email" name="email" type="email" placeholder="example@email.com" />
                </el-form-item>
                <el-form-item label="Password" :style="temp.id == displayItem ? '' : 'display:none'">
                    <el-input v-model="temp.password" name="password" type="password" />
                </el-form-item>
                <el-button v-on:click="showPwd(temp.id)" :style="temp.id == displayItem ? 'display:none' : ''">
                    Change Password
                </el-button>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">
                    Cancel
                </el-button>
                <el-button type="primary" @click="updateData()">
                    Confirm
                </el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import Pagination from '@/components/Pagination'
    export default {
        name: 'Users',
        components: {Pagination},
        data() {
            return {
                users: {},
                temp: {
                    name: '',
                    email: '',
                    password: ''
                },
                dialogFormVisible: false,
                stylePass: 'display: none',
                styleBtn: '',
                keyRerender : 0,
                currentUser: {},
                index: 0,
                displayItem: -1,
                total: 0,
                page: 1,
                limit: 7,
                pageSizes: [7,10,20,50]
            }
        },
        created() {
            this.getList()
        },
        async beforeCreate() {
            this.currentUser = await this.$store.dispatch('user/getCurrentUser')
        },
        methods: {
            async getList() {
                let data = []
                data['page'] = this.page
                data['limit'] = this.limit
                this.users = await this.$store.dispatch('user/listUser', data)
                this.total = this.users['total']
            },
            handleUpdate(row, index) {
                this.temp = {
                    id: row.id,
                    user_name: row.user_name,
                    name: row.name,
                    email: row.email,
                    password: row.password,
                    created_at: row.created_at
                }
                this.dialogFormVisible = true
                this.index = index
            },
            updateData() {
                this.$refs['dataForm'].validate(async (valid) => {
                    if (valid) {
                        let res = await this.$store.dispatch('user/updateUser', this.temp)
                        if (res === 'update user successful') {
                            this.dialogFormVisible = false
                            this.$notify({
                                title: 'Success',
                                message: 'Update user Successfully',
                                type: 'success',
                                duration: 3000
                            })
                            this.users.data.splice(this.index, 1, this.temp)
                        } else {
                            this.$notify({
                                title: 'Error',
                                message: 'Update user error',
                                type: 'error',
                                duration: 3000
                            })
                        }
                    } else {
                        return false
                    }
                })
            },
            showPwd(id) {
                this.displayItem = id
            },
            handleDelete(id, index) {
                this.$confirm('Do you really want to delete?').then(async () => {
                    let res = await this.$store.dispatch('user/deleteUser', id)
                    if (res === 'delete user successful') {
                        this.$notify({
                            title: 'Success',
                            message: 'delete user Successfully',
                            type: 'success',
                            duration: 3000
                        })
                        this.users.data.splice(index, 1)
                        this.keyRerender +=1
                    } else {
                        this.$notify({
                            title: 'Error',
                            message: 'delete user error',
                            type: 'error',
                            duration: 3000
                        })
                    }
                }).catch(() => {})
            }
        }
    }
</script>

<style scoped lang="scss">
</style>
