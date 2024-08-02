package memo_project.spring_boot_back;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @GetMapping("/api/hello")
    public String hello(){
        return "hi, reactBoot";
    }
    
    @CrossOrigin(origins = "http://localhost:3001") // CORS 허용 도메인
    @GetMapping("/")
    public String index(){
        return "/index";
    }

}





