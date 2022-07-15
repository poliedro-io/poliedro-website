import Vue from 'vue'
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue'
import ChevronUpIcon from 'vue-material-design-icons/ChevronUp.vue'
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue'
import PlusThickIcon from 'vue-material-design-icons/PlusThick.vue'
import MinusThickIcon from 'vue-material-design-icons/MinusThick.vue'
import ArrowUpIcon from 'vue-material-design-icons/ArrowUp.vue'
import ArrowRightIcon from 'vue-material-design-icons/ArrowRight.vue'
import CheckCircleIcon from 'vue-material-design-icons/CheckCircle.vue'
import SegmentIcon from 'vue-material-design-icons/Segment.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import CheckIcon from 'vue-material-design-icons/Check.vue'
import CheckDecagramOutlineIcon from 'vue-material-design-icons/CheckDecagramOutline.vue'
import DownloadIcon from 'vue-material-design-icons/Download.vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
// import InstagramIcon from 'vue-material-design-icons/Instagram.vue'
// import FacebookIcon from 'vue-material-design-icons/Facebook.vue'
// import PhoneIcon from 'vue-material-design-icons/Phone.vue'
// import EmailIcon from 'vue-material-design-icons/Email.vue'

const components = {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon,
  PlusThickIcon,
  MinusThickIcon,
  ArrowUpIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CheckDecagramOutlineIcon,
  CheckIcon,
  SegmentIcon,
  CloseIcon,
  DownloadIcon,
  MenuIcon,
  
  // InstagramIcon,
  // EmailIcon,
  // PhoneIcon,
  // FacebookIcon
}

Object.entries(components).forEach(([name, component]) => 
  Vue.component(name, component)
)
