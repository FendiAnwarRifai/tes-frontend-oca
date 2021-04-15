<template>
    <div class="row" style="margin:0;">
        <div class="col-5">
            <div class="login">
                <img src="../../assets/image-login.png" width="278px" alt="">
                <div class="info">
                    <span>
                        Welcome Back, Please login into your account
                    </span>
                </div>
                <div class="form">
                    <form>
                    <div class="form-group">
                        <label for="username">Username / Email</label>
                        <input type="text" class="form-control" id="username" value="Adjie_g4ant3ng@banget.com">
                    </div>
                    <div class="form-group" style="position:relative;">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" value="12345678">
                        <span class="grid-one">|</span>
                        <div class="forgot">
                            <router-link to="">
                                Forgot?
                            </router-link>
                        </div>
                    </div>
                    <button type="submit" class="btn sigin mt-4">sign in</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-7" style="position:relative; overflow:hidden; background:#ED1260; height:100vh">
            <img style="position:absolute; width: 1155px; left: -408px;" src="../../assets/bg-login.png" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* * {
    border:1px solid blue !important;
    } */
    a {
        text-decoration: none !important;
    }
    .login{
        margin-top: 25%;
        margin-left: 15%;
        margin-right: 15%;
    }
    .info{
        margin-top: 63px;;
        font-weight: 500;
        font-size: 15.3571px;
        line-height: 18px;
        color: #4F4F4F;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .form{
        margin-top: 25px;
    }
    .form label {
        font-style: italic;
        font-weight: normal;
        font-size: 14px;
        line-height: 14px;

        color: rgba(154, 154, 154, 0.4);
    }
    .sigin{
        background: #ED1260;
        border-radius: 6px;
        color: white;
        text-align: center;
        width: 100%;
    }
    .sigin:hover{
        background-color: #ec709c;
        color: white;
    }
    #password{
        padding-right: 85px;
    }
    .grid-one{
        position: absolute;
        top: 25px;
        right: 68px;
        font-size: 24px;
        color:  #D7D7D7;
    }
    .forgot{
        position: absolute;
        top: 38px;
        right: 12px;
        font-size: 14px;
        line-height: 14px;
    }
    .forgot a{
        color: rgba(154, 154, 154, 0.4) !important;
    }
</style>
