package memo_project.spring_boot_back;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class BookController {

    @PostMapping("/search")
    public String searchBooks(@RequestBody BookSearchRequest request) {
        // 도서명 처리 로직
        String query = request.getQuery();
        // 예를 들어, 검색 결과를 반환하거나 로직을 실행합니다.
        return "검색 결과: " + query;
    }

    public static class BookSearchRequest {
        private String query;

        // Getter 및 Setter
        public String getQuery() {
            return query;
        }

        public void setQuery(String query) {
            this.query = query;
        }
    }
}
