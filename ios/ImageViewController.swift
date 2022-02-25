import UIKit

@objcMembers
class ImageViewController: UIViewController {
  @IBOutlet weak var imageView:UIImageView!
  var urlStr = "https://images.dog.ceo/breeds/puggle/IMG_074532.jpg"
  
  override func viewDidLoad() {
    super.viewDidLoad()
    
    if let url = URL(string: urlStr) {
        if let data = try? Data(contentsOf: url) {
          imageView.image = UIImage(data: data)
        }
    }
  }
}
