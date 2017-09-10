require 'test_helper'

class Section2ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get section2_index_url
    assert_response :success
  end

end
