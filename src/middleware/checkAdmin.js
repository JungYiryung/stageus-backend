const {user, admin} = require("../const/role.js")
const {noticeBoard, freeBoard} = require("../const/category.js")
const { InvalidRegxError, unAuthrizeError, forbiddenError, NotFoundError, duplicateError} = require("../error/customError.js")

const checkRole = async (req, res, next)=>{
    const roleIdx = req.decoded.roleIdx
    // 관련없는 코든느 같이 있으면 안돼
    // 테스트하기용이한 코드가 아님. 테스트 용이하게 하기위해 쪼개야해.
    // 일반유저가 공지사항 게시판 쓸 수 없음. 
    // checkRole 에 넣어야함

    if(roleIdx === user) {
        return next(forbiddenError("관리자 권한이 필요합니다."))
    }
    next()
}
module.exports = checkRole