//  tính priavte của save và profileS

function createStorage(key) {
    const profileS = JSON.parse(localStorage.getItem(key)) ?? {};
    // lấy được profileS xong parse nó thành obj để js hiểu có thể get

    const save = () => {
        var data = JSON.stringify(profileS); // biến nó thành string do trên web chỉ có lưu dạng string
        localStorage.setItem(key, data);
    }
    return {
        create(key_obj, value_obj) { // viết theo kiểu nhanh
            profileS[key_obj] = value_obj;
            save();
        },
        get: function(key_obj) { // viết kiểu chậm
            return profileS[key_obj];
        },
        remove(key_obj) {
            delete profileS[key_obj];
            save();
        }
    }
}

const profileSetting = createStorage('profile-setting');

// ông profileSetting này ôm 1 phát 3 method, 3 method này refer tới save, profileS nên không bao giờ mất 

profileSetting.create('fullName', 'Son Dang');
profileSetting.create('age', 18);
profileSetting.create('address', 'Ha Noi');


console.log(profileSetting.get('fullName'));
console.log(profileSetting.get('age'));

profileSetting.remove('age');
console.log(profileSetting.get('age'));