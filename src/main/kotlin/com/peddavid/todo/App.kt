package com.peddavid.todo

import com.fasterxml.jackson.annotation.JsonProperty
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*
import java.util.concurrent.atomic.AtomicInteger

@SpringBootApplication
open class App

fun main(args: Array<String>) {
    SpringApplication.run(App::class.java, *args)
}

@Controller
class HomeController {
    @GetMapping("/")
    fun index() = "index"
}

data class User(val id: Int, val username: String, val password: String)
class Users {
    private val users = mutableListOf<User>();
    fun findAll() = users.iterator()
    fun findById(id: Int) = users.find { (uId) -> uId == id }
    fun save(user: User) = users.add(user) //TODO: replace with same id
    fun delete(id: Int) = users.removeIf { (uId) -> uId == id }
}

@RestController
@RequestMapping("/users")
class UserController {
    val users = Users()
    @GetMapping
    fun getAllUsers() = users.findAll()
    @PostMapping
    fun postUser(@RequestBody user: InputUser) = users.save(user.toUser())
    @GetMapping(path = arrayOf("{id}"))
    fun getUserById(@PathVariable("id")id: Int) = users.findById(id)
    @DeleteMapping(path = arrayOf("{id}"))
    fun deleteUserById(@PathVariable("id")id: Int) = users.delete(id)
}

class InputUser(
        @JsonProperty("username") val username: String,
        @JsonProperty("password") val password: String)
{
    companion object {
        val counter = AtomicInteger(0)
    }
    val id = counter.incrementAndGet()
    fun  toUser() = User(id, username, password)
}
